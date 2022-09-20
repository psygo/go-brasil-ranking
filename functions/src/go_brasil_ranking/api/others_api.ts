import { ExpressApiRoute } from "../../infra";

export const home: ExpressApiRoute = async (_, res) => {
  try {
    res.status(200).send({
      status: "success",
      message: "Go Brasil Ranking API",
    });
  } catch (e) {
    res.status(500).json((e as Error).message);
  }
};
