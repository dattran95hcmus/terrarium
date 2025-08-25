type Props = {
  name: string;
  price: string;
  desc: string;
  image: string;
  tag?: string;
};

export default function ProductCard({ name, price, desc, image, tag }: Props) {
  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img src={image} alt={name} className="w-full aspect-[4/3] object-cover transition scale-100 group-hover:scale-105" />
        {tag && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs px-2 py-1 rounded-full border">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>
          <span className="text-leaf-700 font-semibold">{price}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
        <a href="#order" className="btn btn-primary w-full mt-4">Đặt mẫu này</a>
      </div>
    </div>
  );
}
