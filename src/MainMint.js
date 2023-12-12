import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import roboPunksNFT from './RoboPunksNFT.json'
import { 
        Box, 
        Button, 
        Flex, 
        Input, 
        Text,
        useToast,
        ChakraProvider
    } from "@chakra-ui/react";

const roboPunksNFTAddress = "0x3304F3F0033dcE9D4c6a53A59266eD2aE75D1617"

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const [isMint,setIsMint] = useState(false);
    const isConnected = Boolean(accounts[0]);
    const toast = useToast();

    async function handleMint() {
        if(window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(roboPunksNFTAddress, roboPunksNFT.abi, signer);
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((mintAmount * 0.02).toString())
                });
                console.log("response: ",  response);
                if(response.confirmations === 0) {
                    setIsMint(true);
                    toast({
                        title: 'NFT Minted.',
                        description: "Congratulations! You've minted an NFT.",
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-right'
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <ChakraProvider>
            <Flex justify="center" align="center" height="100vh" paddingBottom="150px">
                <Box width="520px">
                    <div>
                        <Text fontSize="48px" textShadow="0 50px #000000">RoboPunks</Text>
                        <Text 
                            fontSize="30px"
                            letterSpacing="-5.5%"
                            fontFamily="VT323"
                            textShadow="0 2px 2px #000000">It is 2078, Can the RoboPunks N
                            FT save humans from destructive rampant NFT speculation? Mint RoboPunks to find out.
                        </Text>
                    </div>
                    {
                        isConnected ? (
                            <div>
                                <Flex>
                                <Button 
                                    backgroundColor="#D6517D"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0f0f0f"
                                    color="#fff"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="10px" 
                                    onClick={handleDecrement}
                                >
                                    -
                                </Button>
                                <Input
                                    readOnly
                                    fontFamily="inherit"
                                    width="400px"
                                    height="40px"
                                    textAlign="center"
                                    paddingLeft="19px"
                                    marginTop="10px"
                                    type="number"
                                    value={mintAmount} />
                                <Button 
                                    backgroundColor="#D6517D"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0f0f0f"
                                    color="#fff"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="10px"
                                    onClick={handleIncrement}
                                >
                                    +
                                </Button>
                                </Flex>
                                <Button 
                                    backgroundColor="#D6517D"
                                    borderRadius="5px"
                                    boxShadow="0px 2px 2px 1px #0f0f0f"
                                    color="#fff"
                                    cursor="pointer"
                                    fontFamily="inherit"
                                    padding="15px"
                                    marginTop="10px" 
                                    onClick={handleMint}
                                > 
                                    Mint Now
                                </Button>
                            </div>
                        ): (
                            <Text 
                                marginTop="70px"
                                fontSize="30px"
                                letterSpacing="-5.5%"
                                fontFamily="VT323"
                                textShadow="0 3px #000000"
                                color="#D6517D">
                                Connect your wallet to Mint.
                            </Text>
                        )
                    }
                    
                </Box>
            </Flex>
        </ChakraProvider>
    )
}

export default MainMint;