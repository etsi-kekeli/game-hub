import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onPlatformSelect: (arg: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Plateforms"}
      </MenuButton>
      <MenuList>
        {data.map((plateform) => (
          <MenuItem
            key={plateform.id}
            onClick={() => onPlatformSelect(plateform)}
          >
            {plateform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
