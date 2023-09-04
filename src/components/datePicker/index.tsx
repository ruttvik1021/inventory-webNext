import { Field } from "formik";

interface IDateField {
  required?: boolean;
  label: string;
  name: string;
  disabled?: boolean;
  value?: any;
}

const Datepicker = ({ required, label, name, disabled, value }: IDateField) => {
  return (
    <>
      <label>{label}</label>
      {required && <span className="text-red-600 ml-1">*</span>}
      <Field name={name}>
        {({ field, meta }: any) => (
          <div>
            <input
              type="date"
              {...field}
              disabled={disabled}
              defaultValue={value}
              className={`mt-2 block w-full rounded-md border-0 py-1.5 px-3 ${
                meta.touched && meta.error && "ring-red-600"
              } text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 `}
            />
            {meta.touched && meta.error && (
              <div className="text-sm text-red-600">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </>
  );
};

export default Datepicker;
