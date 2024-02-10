import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelect: (arg: Genre) => void;
}

const GenreList = ({ onGenreSelect }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <Spinner />;

  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={1}>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => {
                onGenreSelect(genre);
                console.log(`Selected genre = ${genre.name}`);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
