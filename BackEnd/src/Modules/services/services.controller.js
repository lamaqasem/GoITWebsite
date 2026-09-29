import {
  findAllService,
  findServiceByCode,
  getServiceById,
  createService,
  deleteService,
  updateService,
} from "../../../DB/models/services.model.js";

export const getAllServices = async (req, res) => {
  try {
    const allservices = await findAllService();
    return res.status(200).json(allservices);
  } catch (err) {
    console.error(`GET /service error: ${err}`);
    return res.status(500).json({ error: "Failed to get service" });
  }
};

export const getServicesByID = async (req, res) => {
  try {
    const Id = Number(req.params.id);
    const service = await getServiceById(Id);
    if (service.length === 0) {
      return res.status(404).json({ message: "services not found" });
    }

    return res.status(200).json(service);
  } catch (err) {
    console.error(`GET /service error: ${err}`);
    return res.status(500).json({ error: "Failed to get service" });
  }
};

export const createServices = async (req, res) => {
  try {
    const code = req.body.code;

    let findService = await findServiceByCode(code);
    if (findService) {
      return res.status(404).json({ error: "the Service Already Exist" });
    }

    const newService = await createService(req.body);
    if (newService) {
      return res
        .status(201)
        .json({ data: newService, message: "Service created" });
    }
  } catch (err) {
    console.error(`POST /service error: ${err}`);
    return res.status(500).json({ error: "Failed to create service" });
  }
};

export const deleteServices = async (req, res) => {
  try {
    const Id = Number(req.params.id);
    const deleted = await deleteService(Id);
    if (!deleted) {
      return res.status(404).json({ error: "Service not found" });
    }
    return res
      .status(200)
      .json({ messages: "Service deleted successfully", data: deleted });
  } catch (error) {
    console.error(`DELETE /service error: ${error}`);
    return res.status(500).json({ error: "Failed to delete service" });
  }
};

export const updateServices = async (req, res) => {
  try {
    const Id = Number(req.params.id);

    const findedService = await getServiceById(Id);
    if (!findedService) {
      return res.status(404).json({ error: "Service not found" });
    }
    const updatedService = await updateService(Id, req.body);
    if (updatedService) {
      return res
        .status(200)
        .json({ messages: "Service updated", data: updatedService });
    }
  } catch (err) {
    console.error(`PUT /service error: ${err}`);
    return res.status(500).json({ error: "Failed to update service" });
  }
};
