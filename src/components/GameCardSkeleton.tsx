import {
  Card,
  CardBody,
  SkeletonText,
  Heading,
  Image,
  Text,
  HStack,
  Skeleton,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </>
  );
};

export default GameCardSkeleton;
