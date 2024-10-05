import { Select } from "@kobalte/core/select";
import { DropdownOptionsObjType } from "~/constants/dropdown-options.constants";

type Props = {
  placeholder: string;
  options: DropdownOptionsObjType[];
  onChange?: (value: string) => void;
};

const CommonSelect = (props: Props) => {
  return (
    <Select
      class="w-full "
      options={props.options}
      placeholder={props.placeholder}
      optionValue="value"
      optionTextValue="label"
      onChange={(val) => props?.onChange?.(val?.value!)}
      itemComponent={(opts) => (
        <Select.Item item={opts.item} class="px-5 py-2">
          <Select.ItemLabel>
            {opts.item.rawValue.label}{" "}
            <Select.ItemIndicator class="inline-block">✅</Select.ItemIndicator>
          </Select.ItemLabel>
        </Select.Item>
      )}
    >
      <Select.Trigger
        class="w-full min-h-12 px-4 py-2 bg-white text-black rounded-md"
        aria-label="Fruit"
      >
        <Select.Value<DropdownOptionsObjType>>
          {(state) => state.selectedOption().label}
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class="bg-white rounded-md">
          <Select.Listbox class="text-black" />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};
export default CommonSelect;
