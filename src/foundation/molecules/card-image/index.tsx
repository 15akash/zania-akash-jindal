import { useState } from "react";
import styles from "./CardImage.module.scss";
import LoadingSpinner from "../../atoms/loading-spinner";
import { ICardImageProps } from "../../../models/model";

const CardImage = ({ image, alt }: ICardImageProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    return (
        <div className={styles["card-img-con"]}>
            {!isImageLoaded && (
                <div className={styles["card-img-con--spinner"]}>
                    <LoadingSpinner />
                </div>
            )}
            <img src={image} alt={alt} onLoad={() => setIsImageLoaded(true)} />
        </div>
    );
};

export default CardImage;
