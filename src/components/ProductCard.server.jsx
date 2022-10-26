import { Link, Image, Money } from "@shopify/hydrogen";


export default function ProductCard({ product }) {
  const { priceV2: price, compareAtPriceV2: compareAtPrice } =
    product.variants?.nodes[0] || {};

  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/shop/products/${product.handle}`}>
      <div className="grid gap-2 group">
        <div className="overflow-hidden image-frame group-hover:!rounded-jumbo-sm transition-all transform w-fit z-10 relative mx-auto duration-500">
          {isDiscounted && (
            <label className="absolute top-0 right-0 m-4 text-xs subpixel-antialiased text-right text-red-600 text-notice">
              Sale
            </label>
          )}
          <Image
            className="object-cover mx-auto rounded-none aspect-4/5"
            data={product.variants.nodes[0].image}
            // src='/images/product.jpg'
            width={460} height={555}
            alt="Alt Tag"
          />
        </div>

        <div className="flex justify-between">
          <div className="capitalize label">{product.vendor}</div>
          <div className="text-dark">
            <Money withoutTrailingZeros data={price} />
              {isDiscounted && (
                <Money
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between w-full gap-2 mx-auto label group">
          <p className="mb-0 font-bold tracking-widest uppercase">{product.title}</p>
          <div className="btn-arrow"></div>
        </div>
        <div className="overflow-x-hidden transition duration-700 opacity-0 group-hover:opacity-100 group-hover:flex text-dark">

            {product.tags.map((tag) => {
            return (
              <span key={tag.slug} className="text-dark/80 whitespace-nowrap">
                {tag}, &nbsp;
              </span>
            );
          })}

        </div>
      </div>
    </Link>
  );
}
