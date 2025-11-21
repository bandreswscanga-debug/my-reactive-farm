import { useState, useEffect } from "react";

export default function AnimalForm({ onSubmit, submitError }) {
  const [values, setValues] = useState({
    name: "",
    type: "cow",
    age: "",
    weight: "",
    status: "healthy",
  });

  const [errors, setErrors] = useState({});

  //  MEJORA 1 — Validación instantánea (live validation)
  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [values]);

  function validate(data) {
    const err = {};

    if (!data.name.trim()) err.name = "Name is required.";
    if (!data.age || data.age <= 0) err.age = "Age must be a positive number.";
    if (!data.weight || data.weight <= 0)
      err.weight = "Weight must be a positive number.";

    return err;
  }

  // Manejo de cambios
  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpia error del campo editado
    if (errors[name]) {
      setErrors((prev) => {
        const clone = { ...prev };
        delete clone[name];
        return clone;
      });
    }
  }

  // Manejo de envío
  async function handleSubmit(e) {
    e.preventDefault();

    const formErrors = validate(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    await onSubmit(values);

    // Limpieza del formulario
    setValues({
      name: "",
      type: "cow",
      age: "",
      weight: "",
      status: "healthy",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-gray-300 p-4 dark:border-neutral-700 dark:bg-neutral-900"
    >
      {/* NOMBRE */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Ej: Lola"  
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-800"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* TIPO */}
      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-800"
        >
          <option value="cow">Cow</option>
          <option value="chicken">Chicken</option>
          <option value="pig">Pig</option>
          <option value="sheep">Sheep</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* EDAD */}
      <div>
        <label className="block text-sm font-medium mb-1">Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          placeholder="Ej: 3"  
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-800"
        />
        {errors.age && (
          <p className="text-red-500 text-xs mt-1">{errors.age}</p>
        )}
      </div>

      {/* PESO */}
      <div>
        <label className="block text-sm font-medium mb-1">Weight (kg)</label>
        <input
          type="number"
          name="weight"
          value={values.weight}
          onChange={handleChange}
          placeholder="Ej: 250" 
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-800"
        />
        {errors.weight && (
          <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
        )}
      </div>

      {/* ESTADO */}
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          value={values.status}
          onChange={handleChange}
          className="w-full rounded-md border px-3 py-2 text-sm dark:bg-neutral-800"
        >
          <option value="healthy">Healthy</option>
          <option value="review">Under Review</option>
          <option value="sick">Sick</option>
        </select>
      </div>

      {/* ERROR DE API */}
      {submitError && (
        <p className="text-red-500 text-sm">{submitError}</p>
      )}

      <button
        type="submit"
        className="rounded-md bg-green-600 px-4 py-2 text-white text-sm hover:bg-green-700"
      >
        Add Animal
      </button>
    </form>
  );
}
