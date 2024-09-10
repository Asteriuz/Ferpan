import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  promotion?: boolean;
  image: string;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="border-cinza-border flex max-w-96 lg:w-96 flex-col overflow-hidden rounded-lg border shadow-lg">
      <div className="relative">
        <div className="h-80 bg-white">
          <Image
            alt={props.title}
            src={props.image}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        {props.promotion && (
          <div className="absolute left-0 top-0 rounded-br-lg bg-primary px-2 py-1 text-white">
            Promoção
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col gap-5 p-4">
        <div className="flex flex-grow flex-col gap-2">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-cinza-text text-base">{props.description}</p>
        </div>
        <div className="mt-auto">
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-hover transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
