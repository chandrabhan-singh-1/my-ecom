import { FileUpload } from "../file-upload";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface TextFieldProps {
  form: any;
  name: string;
  label: string;
  desc?: string;
  plc?: string;
}

export const TextField = ({ form, name, label, desc, plc }: TextFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={plc}
              {...field}
              className="no-ring focus-visible:border-[2px] focus-visible:border-primary/50"
            />
          </FormControl>
          {desc && <FormDescription>{desc}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface FileFieldProps {
  form: any;
  label?: string;
  desc: string;
  name: string;
  endpoint: "productImage" | "storeImage";
}

export const FileField = ({
  label,
  endpoint,
  form,
  desc,
  name,
}: FileFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col justify-center items-center">
          {/* <FormLabel>{label}</FormLabel> */}
          <FormControl>
            <FileUpload
              endpoint={endpoint}
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>
          {desc && <FormDescription>{desc}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

interface SelectFieldProps {
  form: any;
  label: string;
  arr: string[];
  type: string;
  name: string;
}

export const SelectField = ({
  form,
  label,
  arr,
  type,
  name,
}: SelectFieldProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            disabled={false}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                <SelectValue placeholder={`Select your ${type}`} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {arr.map((item) => (
                <SelectItem key={item} value={item} className="capitalize">
                  {item.toLowerCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
