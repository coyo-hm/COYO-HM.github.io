import { getPlaiceholder } from "plaiceholder";

const getBlurImg = async (imgSrc: string) => {
  try {
    const buffer = await fetch(imgSrc).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer, { size: 10 });
    return base64;
  } catch (e) {
    console.error("getBlurImg", e);
  }
};

export default getBlurImg;
