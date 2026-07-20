import type { CSSProperties } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  pictureURL: string;
  onClickBuyWithPi: () => void;
  onClickBuyWithIrra: () => void;
  disabled?: boolean;
}

const containerStyle: CSSProperties = {
  margin: 16,
  paddingBottom: 16,
  borderBottom: "1px solid gray",
};

const contentRowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  marginBottom: 8,
};

const imageWrapperStyle: CSSProperties = {
  width: "33%",
  marginRight: 8,
};

const imageStyle: CSSProperties = {
  width: "100%",
  objectFit: "cover",
};

const infoStyle: CSSProperties = {
  width: "66%",
};

const priceSectionStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: 8,
};

const paymentOptionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
};

const paymentActionsStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  marginTop: 8,
};

const irraCaptionStyle: CSSProperties = {
  margin: 0,
  fontSize: 12,
  color: "#666",
};

const ProductCard = ({
  name,
  description,
  price,
  pictureURL,
  onClickBuyWithPi,
  onClickBuyWithIrra,
  disabled,
}: ProductCardProps) => {
  return (
    <div style={containerStyle}>
      <div style={contentRowStyle}>
        <div style={imageWrapperStyle}>
          <img style={imageStyle} src={pictureURL} alt={name} />
        </div>

        <div style={infoStyle}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div style={priceSectionStyle}>
        <div style={paymentActionsStyle}>
          <div style={paymentOptionStyle}>
            <strong>{price} Test-Pi</strong>
            <button onClick={onClickBuyWithPi} disabled={disabled}>
              Pay with Pi
            </button>
          </div>
          <div style={paymentOptionStyle}>
            <strong>{price} IRRA</strong>
            <button onClick={onClickBuyWithIrra} disabled={disabled}>
              Pay with IRRA
            </button>
            <p style={irraCaptionStyle}>IRRA prices don't follow actual price, it's set for demo purpose</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
