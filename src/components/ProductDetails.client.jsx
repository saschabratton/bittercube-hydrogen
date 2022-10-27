import { ProductOptionsProvider, MediaFile, useProductOptions, ProductPrice, BuyNowButton, AddToCartButton} from "@shopify/hydrogen";
import HorizontalSeperator from "./headers/HorizontalSeperator.client";
import parse from 'html-react-parser';

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <div className="container grid gap-6 pt-0 lg:grid-cols-2 max-w-screen-2xl">
        <div className="hidden lg:grid lg:gap-6">
          <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
            <ProductGallery media={product.media.nodes} />
          </div>
        </div>
        <div className="sticky top-0 grid gap-6 py-20 h-fit lg:px-20">
          <div>
            <span className="label">{product.vendor}</span>
            <h2>{product.title}</h2>
            <div className="pt-6 prose text-black border-t border-gray-200 text-md">
              {parse(product.descriptionHtml)}
            </div>
            <ProductForm product={product} />

            {/* <button href="#" className="btn btn-action" disabled>Add to cart</button> */}
          </div>

          {/* <HorizontalSeperator />
          <h3>More Information</h3> */}
          {/* <TabSection content={TabContent} /> */}
        </div>
      </div>
    </ProductOptionsProvider>
  );
}

function ProductForm({ product }) {
  const { options, selectedVariant } = useProductOptions();

  // const isOutOfStock = !selectedVariant?.availableForSale || false;
  return (
    <form className="grid gap-10">
      <div className="">
        {
          <div className="grid grid-cols-2 gap-4 my-20">
            <div>
              {options.map(({ name, values }) => {
                if (values.length === 1) {
                  return null;
                }
                return (
                  <div
                    key={name}
                    className="grid grid-cols-2 gap-2 "
                  >
                    <legend className="col-span-3 px-3 text-dark">
                      {name}
                    </legend>
                    <OptionRadio name={name} values={values} />
                  </div>
                );
              })}
              {/* <ProductPrice
                className="text-lg font-semibold text-gray-900"
                variantId={selectedVariant.id}
                data={product}
              /> */}
            </div>
            <div className="flex items-end justify-end">
              <PurchaseMarkup />
            </div>

          </div>
        }

      </div>

      {/* <div className="grid items-stretch gap-4">
        <PurchaseMarkup />
      </div> */}
    </form>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        type="button"
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
      >
        <span className="mb-0 btn btn-action">
          {isOutOfStock ? "Sold out" : "Add to cart"}
        </span>
      </AddToCartButton>
      {/* {isOutOfStock ? (
        <span className="px-6 py-3 leading-none text-center text-black border rounded-sm ">
          Available in 2-3 weeks
        </span>
      ) : (
        <BuyNowButton variantId={selectedVariant.id}>
          <span className="inline-block w-full max-w-xl px-6 py-3 font-medium leading-none text-center border rounded-sm">
            Buy it now
          </span>
        </BuyNowButton>
      )} */}
    </>
  );
}

function OptionRadio({ values, name }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label key={id} htmlFor={id}>
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => setSelectedOption(name, value)}
            />
            <div
              className={`leading-none cursor-pointer transition-all duration-200  border-2 rounded-md p-3 flex flex-1 h-full ${
                checked ? "border-gold/100 text-gold" : "border-gold/0"
              }`}
            >
              {value}
            </div>
          </label>
        );
      })}
    </>
  );
}

function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto w-screen md:w-full lg:col-span-2`}
    >
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === "MODEL_3D") {
          extraProps = {
            interactionPromptThreshold: "0",
            ar: true,
            loading: "eager",
            disableZoom: true,
          };
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image",
          },
        };

        return (
          <div
            className={"snap-center card-image bg-white md:w-full w-[80vw] shadow-sm rounded"}
            key={med.id || med.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={`w-full h-full object-cover`}
              data={data}
              options={{
                crop: "center",
              }}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}
