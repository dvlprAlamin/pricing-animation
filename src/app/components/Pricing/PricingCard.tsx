import Image from 'next/image';
import React, { FC } from 'react';
{
  /* <div
              
              key={index}
            >
              <h3>{card.plan}</h3>
              <p className={styles.price}>{card.price}</p>
              <p>{card.storage}</p>
              <p>{card.bandwidth}</p>
              <button>Sign Up</button>
              <video autoPlay loop muted>
                <source src={card.borderUrl} type="video/mp4" />
              </video>
            </div> */
}
const PricingCard: FC<{
  cardData: {
    plan: string;
    price: number;
    text: string;
    storage: string;
    bandwidth: string;
    borderUrl: string;
    cardImage: string;
  };
  index: number;
  handleCard: (e: React.MouseEvent<HTMLDivElement>, index: number) => void;
  activeCard: number;
}> = ({ cardData, activeCard, index, handleCard }) => {
  return (
    <div
      onClick={(e) => handleCard(e, index)}
      className={` 
        item relative mr-14 flex aspect-[0.7372] w-[390px] flex-shrink-0 cursor-pointer snap-center flex-col rounded-[24px] border border-[rgba(255,255,255,0.05)] p-[28px] pb-[25px] text-white transition-all duration-200 lg:mr-12 md:w-[366px] sm:mr-5 sm:w-[91%] sm:max-w-[366px] sm:p-[18px] xs:w-[288px]`}
    >
      <h3 className="text-20 font-semibold leading-snug tracking-tight sm:text-16">
        {cardData.plan}
      </h3>
      <p className="mt-2.5 leading-snug">
        <span className="text-[64px] font-semibold tracking-tight lg:text-56 md:text-48 sm:text-36">
          ${cardData.price}
        </span>
        <span className="ml-1 text-20 font-medium tracking-tight text-grey-80 sm:text-16">
          {cardData.price > 0 ? '.99' : ''}/monthly
        </span>
      </p>
      <p className="mt-1 pr-3 text-18 leading-snug -tracking-[0.03em] md:mt-0 sm:pr-0 sm:text-16">
        {cardData.text}
      </p>
      <span
        className="mt-[18px] block h-px bg-[rgba(255,255,255,0.10)] sm:mt-4"
        aria-hidden="true"
      ></span>
      <ul className="mt-6 flex flex-col gap-y-4 lg:mt-8 md:mt-7 sm:mt-4 sm:gap-y-3">
        <li className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight">
          <CheckIcon />
          Unlimited users
        </li>
        <li className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight">
          <CheckIcon />
          Unlimited Huly Objects
        </li>
        <li className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight">
          <CheckIcon />
          {cardData.storage} Storage per Workspace
          <span className="ml-1 whitespace-nowrap">
            <span
              className="group relative top-0.5 inline-block"
              data-tooltip-id="10GB Storage per Workspace_tooltip_0"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                className="text-grey-80 transition-opacity duration-200 group-hover:text-white"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8.002 16.004A8.002 8.002 0 1 0 8.002 0a8.002 8.002 0 0 0 0 16.004"
                  opacity="0.11"
                ></path>
                <path
                  fill="#C9CBCF"
                  d="M8.004 4.92c.576 0 .82-.308.82-.73v-.218c0-.423-.244-.73-.82-.73s-.832.307-.832.73v.218c0 .422.256.73.832.73M7.3 12.767h1.395V6.11H7.3v6.658Z"
                ></path>
              </svg>
            </span>
          </span>
        </li>
        <li className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight">
          <CheckIcon />
          {cardData.bandwidth} Video/Audio Traffic
          <span className="ml-1 whitespace-nowrap">
            <span
              className="group relative top-0.5 inline-block"
              data-tooltip-id="10GB Video/Audio Traffic_tooltip_0"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                className="text-grey-80 transition-opacity duration-200 group-hover:text-white"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8.002 16.004A8.002 8.002 0 1 0 8.002 0a8.002 8.002 0 0 0 0 16.004"
                  opacity="0.11"
                ></path>
                <path
                  fill="#C9CBCF"
                  d="M8.004 4.92c.576 0 .82-.308.82-.73v-.218c0-.423-.244-.73-.82-.73s-.832.307-.832.73v.218c0 .422.256.73.832.73M7.3 12.767h1.395V6.11H7.3v6.658Z"
                ></path>
              </svg>
            </span>
          </span>
        </li>
        <li className="flex items-center gap-x-2 text-18 leading-none tracking-snugger text-white/90 sm:gap-x-1.5 sm:whitespace-nowrap sm:text-16 sm:tracking-tight">
          <CheckIcon />
          AI — TBD
        </li>
      </ul>
      <span
        className={`flex items-center justify-center h-14 w-full text-18 tracking-snugger rounded-full border border-white/20 hover:border-white/50 mt-auto font-semibold capitalize transition-all duration-500 hover:bg-opacity-85 sm:!h-10 sm:!text-16 ${
          activeCard === index
            ? 'bg-white text-black'
            : 'bg-transparent text-white'
        }`}
        //   href="/login"
      >
        Start Free
      </span>
      <div className="pointer-events-none select-none rounded-[inherit]">
        <div
          className="absolute -left-[70%] -top-[300px] -z-20 aspect-[0.925925] w-[1000px] rounded-[inherit] md:-top-[278px] md:w-[932px] sm:-left-[68.666%] sm:-top-[56%] sm:w-[255%]"
          style={{ opacity: activeCard === index ? 1 : 0 }}
        >
          <div className="absolute -inset-0">
            <video
              autoPlay
              className="absolute inset-0"
              width="1000"
              height="1080"
              loop
              muted
              style={{ opacity: 1 }}
            >
              <source src={cardData.borderUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -inset-px -z-10 select-none rounded-[inherit] [backdrop-filter:blur(1px)] sm:rounded-[18px]"
        style={{ opacity: activeCard === index ? 1 : 0 }}
      >
        <Image fill src={cardData.cardImage} alt="" />
      </div>
    </div>
  );
};

export default PricingCard;

const CheckIcon = () => {
  return (
    <Image
      alt=""
      loading="lazy"
      width="16"
      height="16"
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS44MjkiIGQ9Im0xMy4zMyA0LTcuMzMzIDcuMzMzTDIuNjY0IDgiLz48L3N2Zz4="
    />
  );
};
