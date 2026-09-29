const expectedTypes = {
  category_id: "number",
  code: "string",
  name_en: "string",
  name_ar: "string",
  description_en: "string",
  description_ar: "string",
  icon_url: "string",
};

export const validategetServiceByID = async (req, res, next) => {
  try {
    const Id = Number(req.params.id);
    if (!Id) {
      return res.status(404).json({ error: "Enter the number id" });
    }
    next();
  } catch (err) {
    console.error(`GET /subject error: ${err}`);
    return res.status(500).json({ error: "Invalid ID" });
  }
};

export const validateCreateService = async (req, res, next) => {
  try {
    for (let key in expectedTypes) {
      const expectedType = expectedTypes[key];
      const value = req.body[key];
      if (typeof value !== expectedType) {
        return res.status(404).json({
          error: `Field "${key}" should be of correct type`,
        });
      }
    }
    next();
  } catch (err) {
    console.error(`POST /subject error: ${err}`);
    return res.status(500).json({ error: "Failed to create service" });
  }
};

export const validateDeleteService = async (req, res, next) => {
  try {
    const Id = Number(req.params.id);
    if (!Id) {
      return res.status(404).json({ message: "Enter the number id" });
    }

    next();
  } catch (err) {
    console.error(`POST /subject error: ${err}`);
    return res.status(500).json({ error: "Failed to delete service" });
  }
};

export const validateUpdateService = async (req, res, next) => {
  try {
    const Id = Number(req.params.id);
    let hasAnyField = false;

    if (!Id) {
      return res.status(404).json({ message: "Enter the number id" });
    }

    for (let key in expectedTypes) {
      const expectedType = expectedTypes[key];
      const value = req.body[key];
      if (value !== undefined && value !== null && value !== "") {
        hasAnyField = true;
        if (typeof value !== expectedType) {
          return res.status(400).json({
            error: `Field "${key}" should be of type ${expectedType}`,
          });
        }
      }
    }

    if (!hasAnyField) {
      return res.status(400).json({ error: "No fields provided" });
    }

    next();
  } catch (err) {
    console.error(`POST /subject error: ${err}`);
    return res.status(500).json({ error: "Failed to update service" });
  }
};
