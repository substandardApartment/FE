import closeModal from "@/Img/Modal/closeModal.svg";
import Image from "next/image";
import { useModalState } from "@/store/Modal";
import { TAPartDataType } from "@/types/ApartDataType";
import { useApartState } from "@/store/Apart";

type TMApartHeader = {
  data: TAPartDataType;
};

const MApartHeader = (props: TMApartHeader) => {
  const { setModalName } = useModalState();
  const { setData } = useApartState();

  return (
    <div className="text-white bg-[#4252f0] px-5 py-5 flex justify-between w-full">
      <section className="flex flex-col gap-2">
        <strong>{props.data.info.title}</strong>
        <p>{props.data.info.subTitle}</p>
        <p>{props.data.info.address}</p>
      </section>
      <Image
        src={closeModal}
        alt={"close modal icon"}
        className="self-start cursor-pointer"
        onClick={() => {
          setModalName(null);
          setData(null);
        }}
      />
    </div>
  );
};

export default MApartHeader;
