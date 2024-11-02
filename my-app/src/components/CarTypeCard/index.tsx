import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CarTypeCardProps {
    imageSrc: string;
    title: string;
    amount: string;
    link: string;
}

const CarTypeCard: React.FC<CarTypeCardProps> = ({
    imageSrc,
    title,
    amount,
    link,
}) => {
    return (
        <Link href={link} className="w-full p-5 border-b-4 border-neutral-200 shadow flex items-center hover:bg-slate-100 group transition-all duration-200">
            <div className="flex items-center">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <div className="ml-5">
                    <h1 className="text-lg font-bold">{title}</h1>
                    <p className="text-sm text-neutral-500 py-1 px-2 bg-slate-100 group-hover:bg-blue-100 transition-all duration-200 rounded-lg font-medium">{amount} vehicles</p>
                </div>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="text-md text-neutral-500 ml-auto" />
        </Link>
    );
};

export default CarTypeCard;