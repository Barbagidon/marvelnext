import { Md5 } from "ts-md5";

export const getTimeStampAndHash = (): IgetTimeStampAndHash => {
  const timeStamp = +new Date();
  const md = Md5.hashStr(
    timeStamp + `${process.env.NEXT_PRIVATE_KEY}` + process.env.NEXT_PUBLIC_KEY
  );

  return {
    timeStamp,
    md,
  };
};

interface IgetTimeStampAndHash {
  timeStamp: number;
  md: string;
}
