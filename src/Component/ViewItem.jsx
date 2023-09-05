import React from 'react'
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


function ViewItem() {
    return (
        <div style={{ display: 'flex' }}>
            <div>
                <Flex justify="center" align="center">
                    <Stack width="320px" boxShadow="md" borderRadius="xl">
                        <Image style={{ height: '390px', marginTop: '10px' }} src="https://rukminim2.flixcart.com/image/832/832/xif0q/sari/l/x/j/free-saree-silk-sarisp-unstitched-original-imagn4akdtrdz3fw.jpeg?q=70" alt="image" />
                        <Stack p="2">
                            <HStack>
                            </HStack>
                            <VStack align="flex-start">
                                
                            </VStack>
                        </Stack>
                    </Stack>
                </Flex>
            </div>
            <div style={{marginTop:"200px"}}>
                <h1 style={{fontWeight:'bolder'}}>yashika</h1>
                <h3>Floral Print Bollywood Georgette Saree</h3>
                <h3>Blue</h3>

                <h4> ₹269₹1,10875% off
                    Hot Deal</h4>
            </div>
        </div>
    )
}

export default ViewItem