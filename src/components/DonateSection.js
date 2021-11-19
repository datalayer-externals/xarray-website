import React from "react"
import {
  Heading,
  Link,
  Image,
  Text,
  Button,
  Container,
  Stack,
  Box,
  Center,
} from "@chakra-ui/react"

export const DonateSection = () => {
  return (
    <Box id={"donate"}>
      <Container maxW={"6xl"} py={"4"}>
        <Heading textAlign={"center"} fontSize={"5xl"}>
          Donate
        </Heading>
        <Stack
          align={"center"}
          py={{ base: 8, md: 8 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack
            flex={1}
            px={10}
            spacing={{ base: 5, md: 10 }}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <Text fontSize={"lg"}>
              Xarray is a Sponsored Project of NumFOCUS, a{" "}
              <Text
                as={"a"}
                href={"https://en.wikipedia.org/wiki/501(c)(3)_organization"}
                color={"blue.400"}
              >
                501(c)(3) nonprofit charity
              </Text>{" "}
              in the United States. NumFOCUS provides Xarray with fiscal, legal,
              and administrative support to help ensure the health and
              sustainability of the project. Visit{" "}
              <Text as={"a"} href={"https://numfocus.org/"} color={"blue.400"}>
                numfocus.org
              </Text>{" "}
              for more information.
              <br />
              <br />
              If you like Xarray and want to support our mission, please
              consider making a donation to support our efforts.
            </Text>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"red.400"}
              _hover={{ bg: "red.500" }}
            >
              <Link href={"https://numfocus.org/donate-to-xarray"}>
                Donate ❤
              </Link>
            </Button>
          </Stack>
          <Stack flex={1} justify={"center"} align={"center"} w={"full"}>
            <Center
              as={Image}
              src={"NumFOCUS_sponsored_project_logo.svg"}
              alt={"NumFocus logo"}
            ></Center>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
