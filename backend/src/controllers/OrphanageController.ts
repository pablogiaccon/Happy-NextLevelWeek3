import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";

import Orphanage from "../models/Orphanage";
import orphanage_view from "../views/orphanage_view";
import orphanageView from "../views/orphanage_view";

export default class OrphanageController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orphanageRepository = getRepository(Orphanage);

    const orphanages = await orphanageRepository.find({
      relations: ["images"],
    });

    return response.status(200).json(orphanage_view.renderMany(orphanages));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const orphanageRepository = getRepository(Orphanage);

    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.status(200).json(orphanageView.render(orphanage));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });
    const orphanageRepository = getRepository(Orphanage);

    const hasOrphanage = await orphanageRepository.findOne({
      where: { email },
    });

    if (hasOrphanage) {
      return response.status(401).json({ error: "this email is already used" });
    }

    const data = {
      id: uuid(),
      email,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = orphanageRepository.create(data);

    await orphanageRepository.save(orphanage);

    return response.status(201).json(orphanage);
  }
}
