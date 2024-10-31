import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CarCardProps {
    imageSrc: string;
    title: string;
    description: string;
    km: string;
    fuel: string;
    transmission: string;
    price: string;
    href: string;
}

const CarCard: React.FC<CarCardProps> = ({
    imageSrc,
    title,
    description,
    km,
    fuel,
    transmission,
    price,
    href,
}) => {
    return (
        <div className="w-full border-2 border-slate-300 rounded-lg shadow-xl">
            <Image
                src={imageSrc}
                width={300}
                height={200}
                alt={title}
                className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="p-5 py-5">
                <h1 className="text-xl font-bold mb-1">{title}</h1>
                <p className="mb-3 truncate ...">{description}</p>
                <ul className="flex justify-between items-center py-6">
                    <li className="flex flex-col justify-center items-center">
                        <Image src="/assets/km.svg" width={25} height={25} alt="km" />
                        <p>{km}</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <Image src="/assets/fuel.svg" width={25} height={25} alt="fuel" />
                        <p>{fuel}</p>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                        <Image src="/assets/transmission.svg" width={25} height={25} alt="transmission" />
                        <p>{transmission}</p>
                    </li>
                </ul>
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-lg">{price}</h1>
                    <Link
                        className="group relative inline-block overflow-hidden border border-black px-3 py-1 focus:outline-none focus:ring"
                        href={href}
                    >
                        <span className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"></span>
                        <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                            Details
                            <FontAwesomeIcon icon={faArrowRight} className="text-[14px] ml-2" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;