import {
    Avatar,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
    return (
        <>
            <div style={{ display: 'flex', margin: "30px", gap: '20px', marginLeft: "100px" }}>
                <Flex justify="center" align="center">
                    <Stack width="320px" boxShadow="md" borderRadius="xl">
                        <Image style={{ height: '290px' }} src="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/l/x/j/free-saree-silk-sarisp-unstitched-original-imagn4akdtrdz3fw.jpeg?q=70" alt="image" />
                        <Stack p="2">
                            <HStack>
                                <Avatar size="sm" />
                                <Text fontWeight="600">John Doe</Text>
                                <Text fontSize="xs">1 min ago</Text>
                            </HStack>
                            <VStack align="flex-start">
                                <Heading fontSize="lg">Womens </Heading>

                                <Text fontSize="sm">

                                    yashika
                                    Floral Print Bollywood Georgette Saree
                                    Blue

                                    ₹269₹1,10875% off
                                    Hot Deal
                                </Text>
                                <Button alignSelf="flex-end" size="sm" as={Link} to="/viewitem">
                                    View Item
                                </Button>
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex justify="center" align="center">
                    <Stack width="320px" boxShadow="md" borderRadius="xl">
                        <Image style={{ height: '290px' }} src="https://rukminim2.flixcart.com/image/832/832/l4ln8nk0/sari/p/2/u/free-2535s934-samah-unstitched-original-imagfgq7pc2mc4vz.jpeg?q=70" alt="image" />
                        <Stack p="2">
                            <HStack>
                                <Avatar size="sm" />
                                <Text fontWeight="600">John Doe</Text>
                                <Text fontSize="xs">1 min ago</Text>
                            </HStack>
                            <VStack align="flex-start">
                                <Heading fontSize="lg">Womens </Heading>

                                <Text fontSize="sm">

                                    yashika
                                    Floral Print Bollywood Georgette Saree
                                    Blue

                                    ₹269₹1,10875% off
                                    Hot Deal
                                </Text>
                                <Button alignSelf="flex-end" size="sm" as={Link} to="/viewitem">
                                    View Item
                                </Button>
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex justify="center" align="center">
                    <Stack width="320px" boxShadow="md" borderRadius="xl">
                        <Image style={{ height: '290px' }} src="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/l/x/j/free-saree-silk-sarisp-unstitched-original-imagn4akdtrdz3fw.jpeg?q=70" alt="image" />
                        <Stack p="2">
                            <HStack>
                                <Avatar size="sm" />
                                <Text fontWeight="600">John Doe</Text>
                                <Text fontSize="xs">1 min ago</Text>
                            </HStack>
                            <VStack align="flex-start">
                                <Heading fontSize="lg">Womens </Heading>

                                <Text fontSize="sm">

                                    yashika
                                    Floral Print Bollywood Georgette Saree
                                    Blue

                                    ₹269₹1,10875% off
                                    Hot Deal
                                </Text>
                                <Button alignSelf="flex-end" size="sm" as={Link} to="/viewitem">
                                    View Post
                                </Button>
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>

                <Flex justify="center" align="center">
                    <Stack width="320px" boxShadow="md" borderRadius="xl">
                        <Image style={{ height: '290px' }} src="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/l/x/j/free-saree-silk-sarisp-unstitched-original-imagn4akdtrdz3fw.jpeg?q=70" alt="image" />
                        <Stack p="2">
                            <HStack>
                                <Avatar size="sm" />
                                <Text fontWeight="600">John Doe</Text>
                                <Text fontSize="xs">1 min ago</Text>
                            </HStack>
                            <VStack align="flex-start">
                                <Heading fontSize="lg">Womens </Heading>

                                <Text fontSize="sm">

                                    yashika
                                    Floral Print Bollywood Georgette Saree
                                    Blue

                                    ₹269₹1,10875% off
                                    Hot Deal
                                </Text>
                                <Button alignSelf="flex-end" size="sm" as={Link} to="/viewitem">
                                    View Post
                                </Button>
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>
            </div>
        </>
    );
};

export default PostCard;
