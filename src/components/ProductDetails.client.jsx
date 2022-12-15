import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  ProductPrice,
  AddToCartButton
} from "@shopify/hydrogen"
import parse from 'html-react-parser'
import { ImageCarousel } from "@client"
// import { CartLineItem } from "./CartDetails.client"
// ----------------------------------------------------------------------

export default function ProductDetails({ product }) {
  const { media, vendor, title, descriptionHtml } = product

  return (
    <ProductOptionsProvider data={product}>
      <div className="container grid w-11/12 gap-6 pt-0 md:grid-cols-2">
        <div className="overflow-hidden md:hidden">
          {/* <ImageCarousel content={product.media.nodes} /> */}
          <MobileProductGallery media={product.media.nodes}/>
        </div>
        <div className="hidden gap-6 md:flex md:flex-col">
          <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
            <ProductGallery media={media.nodes} />
          </div>
        </div>
        <div className="sticky top-0 grid gap-6 py-20 md:px-4 lg:px-10 h-fit xl:px-20">
          <div>
            <p className="text-base label">{vendor}</p>
            <h1>{title}</h1>
            <ProductForm product={product} />
            <div className="pt-6 prose text-dark text-md"       dangerouslySetInnerHTML={{__html: descriptionHtml}}/>
              {/* {parse(product.descriptionHtml)} */}
              {/* {JSON.stringify(descriptionHtml)} */}

            {/* </div> */}


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
        {
          <div className="flex flex-col justify-end py-8 my-8 xl:justify-between gap-x-4 gap-y-8 xl:flex-row border-y-2 border-gold">
            <div className="flex flex-col gap-2 md:flex-row">
              {options.map(({ name, values }) => {
                if (values.length === 1) {
                  return null;
                }
                return (
                  <div
                    key={name}
                    className="flex items-center gap-2"
                  >
                    {/* <legend className="col-span-2 px-3 text-lg text-dark">
                      {name}
                    </legend> */}
                    <OptionRadio name={name} values={values} />
                  </div>
                );
              })}
              <div className="flex items-center gap-4">
                <div className="w-5 h-3 btn-arrow btn-arrow-gold"></div>
                <ProductPrice
                  className="text-lg font-semibold text-dark"
                  variantId={selectedVariant.id}
                  data={product}
                />
              </div>

            </div>
            <div className="flex items-center justify-between">

              <PurchaseMarkup />
              {/* <CartLineItem /> */}
            </div>

          </div>
        }
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
        <span className="my-0 btn btn-action">
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
          <label key={id} htmlFor={id} className="flex flex-1 w-full gap-2">
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
              className={`border-2 rounded-md flex items-center p-3 ${
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


function MobileProductGallery({ media }) {
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