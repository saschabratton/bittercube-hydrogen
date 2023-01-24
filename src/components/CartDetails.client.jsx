import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import {
  useCart,
  useCartLine,
  CartLineProvider,
  CartShopPayButton,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  Image,
  Link,
  Money,
  useNavigate
} from "@shopify/hydrogen"

// ----------------------------------------------------------------------




export default function CartDetails({ onClose }) {
  const { lines } = useCart()
  if (lines.length === 0) {
    return <CartEmpty onClose={onClose} />;
  }

  // useEffect(() => {
  //   ClientAnalytics.pushToPageAnalyticsData({
  //     lines: lines,
  //   });
  // });

  return (
    <form className="h-full pb-0 overflow-auto">
      <section
        aria-labelledby="cart-contents"
        className="px-4 pt-0 pb-4 transition md:px-12"
      >
        <ul className="grid gap-6 md:gap-10">
          {lines.map((line) => {
            return (
              <CartLineProvider key={line.id} line={line}>
                <CartLineItem />
              </CartLineProvider>
            );
          })}
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        className="p-4 border-t-2 md:px-12 border-gold"
      >
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>
        <OrderSummary />
        <CartCheckoutActions />
      </section>
    </form>
  );
}

export function GiftMessage(){
  const { id, note, noteUpdate } = useCart()
  return(
    <div className="py-4 mb-6 border-b-2 border-gold">
      <p className="text-sm text-center label">Is this a gift?<br />Enter a personalized message for the recipient.</p>
      <textarea
        name='note'
        value={note}
        onChange={({ target: { value } }) => {
          // console.log(value)
          noteUpdate({id, note: value})
        }}
        className="w-full p-4 rounded-lg h-28">

      </textarea>
    </div>
  )
}

export function CartEmpty({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 space-y-7 md:py-8 md:px-12">
      <h2 className="text-4xl font-bold whitespace-pre-wrap max-w-prose">
        Your cart is empty
      </h2>
      <button
        onClick={onClose}
        className="btn btn-action"
      >
        Continue shopping
      </button>
    </div>
  );
}

function CartCheckoutActions() {
  const navigate = useNavigate()
  const [cookies] = useCookies()
  const { checkoutUrl, noteUpdate, note } = useCart()
  const [message, setMessage] = useState(note)

  const handleCheckout = async (url) => {
    try {
      await noteUpdate(message)
    } catch (error) {
      console.log(error)
    }
    navigate(url)
  }
  return (
    <>
      <div className="flex flex-col items-center gap-4 py-6 md:mt-2">
        <p className="mb-0 text-sm text-center label">Add a personal gift Message?</p>
        <textarea
          name='note'
          value={message}
          onChange={({ target: { value } }) => {
            setMessage(value)
          }}
          className="w-full p-4 rounded-lg h-28"/>

        <button
          type="button"
          onClick={() => handleCheckout(`${checkoutUrl}/?gclid=${cookies['__gclid']?.id}`)}
          width="full"
          className="w-full m-0 text-center btn btn-action"
        >
          <span className="hidden lg:inline">Continue to </span>Checkout
        </button>
      </div>
    </>
  );
}

function OrderSummary() {
  const { cost, note } = useCart()

  return (
    <>
      <dl className="mb-0">
        <div className="flex items-center justify-between">
          <dt>Subtotal</dt>
          <dd>
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              "-"
            )}
          </dd>
        </div>
      </dl>
    </>
  );
}

export function CartLineItem() {
  const { linesRemove } = useCart();
  const { id: lineId, quantity, merchandise } = useCartLine();

  return (
    <li key={lineId} className="flex flex-col md:flex-row">
      <div className="flex-shrink-0">
        <Image
          data={merchandise.image}
          alt={merchandise.product.handle}
          className="object-cover object-center w-24 h-24 rounded md:w-28 md:h-28"
        />
      </div>

      <div className="flex justify-between flex-1 gap-3 ml-4 sm:ml-6">
        <div className="relative grid">
          <h3 className="font-medium">
            <Link to={`/products/${merchandise.product.handle}`}>
              {merchandise.product.title}
            </Link>
          </h3>

          <div className="flex flex-col justify-start">
            {(merchandise?.selectedOptions || []).map((option) => (
              <span key={option.name} className="my-0 text-base text-dark">
                {option.name}: {option.value}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between w-full gap-2 mt-auto">
            <div className="flex justify-start mr-4 text-copy">
              <CartLineQuantityAdjust
                lineId={lineId}
                quantity={quantity}
                linesRemove={linesRemove}
              />
            </div>
            <button
              type="button"
              onClick={() => linesRemove(lineId)}
              className="h-[40px] w-[40px] border border-gold rounded flex justify-center items-center"
            >
              <span className="sr-only">Remove</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="w-[13px] h-[14px]"
              >
                <title>Remove</title>
                <path
                  transform="translate(4 4)"
                  d="M1.0498 0.75C0.917196 0.75 0.790019 0.802679 0.696251 0.896447C0.602483 0.990215 0.549805 1.11739 0.549805 1.25V7.25C0.549805 7.38261 0.602483 7.50979 0.696251 7.60355C0.790019 7.69732 0.917196 7.75 1.0498 7.75C1.18241 7.75 1.30959 7.69732 1.40336 7.60355C1.49713 7.50979 1.5498 7.38261 1.5498 7.25V1.25C1.5498 1.11739 1.49713 0.990215 1.40336 0.896447C1.30959 0.802679 1.18241 0.75 1.0498 0.75ZM3.9498 0.75C3.8172 0.75 3.69002 0.802679 3.59625 0.896447C3.50248 0.990215 3.4498 1.11739 3.4498 1.25V7.25C3.4498 7.38261 3.50248 7.50979 3.59625 7.60355C3.69002 7.69732 3.8172 7.75 3.9498 7.75C4.08241 7.75 4.20959 7.69732 4.30336 7.60355C4.39713 7.50979 4.4498 7.38261 4.4498 7.25V1.25C4.4498 1.11739 4.39713 0.990215 4.30336 0.896447C4.20959 0.802679 4.08241 0.75 3.9498 0.75Z"
                />
                <path d="M12.5 2.5H8.97C8.93489 1.90332 8.72636 1.32986 8.37 0.85C7.94 0.32 7.3 0 6.5 0C5.7 0 5.06 0.32 4.63 0.85C4.27312 1.32958 4.06454 1.9032 4.03 2.5H0.5C0.367392 2.5 0.240215 2.55268 0.146447 2.64645C0.0526784 2.74021 0 2.86739 0 3C0 3.13261 0.0526784 3.25979 0.146447 3.35355C0.240215 3.44732 0.367392 3.5 0.5 3.5H1.75V13.5C1.75 13.78 1.97 14 2.25 14H10.75C10.8826 14 11.0098 13.9473 11.1036 13.8536C11.1973 13.7598 11.25 13.6326 11.25 13.5V3.5H12.5C12.6326 3.5 12.7598 3.44732 12.8536 3.35355C12.9473 3.25979 13 3.13261 13 3C13 2.86739 12.9473 2.74021 12.8536 2.64645C12.7598 2.55268 12.6326 2.5 12.5 2.5ZM5.41 1.48C5.64 1.19 5.99 1 6.5 1C7.01 1 7.35 1.19 7.59 1.48C7.79 1.72 7.89 2.08 7.95 2.5H5.05C5.1 2.08 5.22 1.72 5.41 1.48ZM10.25 13H2.75V3.5H10.25V13Z" />
              </svg>
            </button>
          </div>
        </div>
        <span>
          <CartLinePrice as="span" />
        </span>
      </div>
    </li>
  );
}

function CartLineQuantityAdjust({ lineId, quantity }) {
  return (
    <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
        Quantity, {quantity}
      </label>
      <div className="flex items-center gap-3 px-3 pt-0 overflow-auto text-gold">
        <CartLineQuantityAdjustButton
          adjust="decrease"
          aria-label="Decrease quantity"
          className="h-[40px] flex justify-center items-center transition text-primary/40 hover:text-primary disabled:pointer-events-all disabled:cursor-wait"
        >
          &#8722;
        </CartLineQuantityAdjustButton>
        <CartLineQuantity
          as="div"
          className="h-[40px] flex justify-center items-center text-center text-primary/90"
        />
        <CartLineQuantityAdjustButton
          adjust="increase"
          aria-label="Increase quantity"
          className="h-[40px] flex justify-center items-center transition text-primary/40 hover:text-primary disabled:pointer-events-all disabled:cursor-wait"
        >
          &#43;
        </CartLineQuantityAdjustButton>
      </div>
    </>
  );
}
