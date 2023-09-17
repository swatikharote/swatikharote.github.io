import { Box, Heading, Image, Text, Center } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

import "./Calendor.css"

const Calendor = (username, viewBox) => {

    const theme = {
        "light": [
            "#f0f0f0",
            "#c4edde",
            "#7ac7c4",
            "#f73859",
            "#384259"
        ],
        "dark": [
            "hsl(0, 0%, 22%)",
            "#4D455D",
            "#7DB9B6",
            "#F5E9CF",
            "#E96479"
        ]
    }

    return (
        <Box className='react-activity-calendar' w='82%' margin={'auto'} >
            <Text mb={'20px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} color={'rgb(1, 164, 121)'}>DAYS I WORKED</Text>
            <Box borderTopLeftRadius={'50px'} borderBottomRightRadius={'50px'} borderTopRightRadius={'5px'} borderBottomLeftRadius={'5px'} w='100%' border="10px solid rgb(1, 164, 121)" p='30px' h="280px">
                <Box className="github-calendar-container" >
                    <Center>
                        <GitHubCalendar username="swatikharote" theme={theme} />
                    </Center>

                </Box>
            </Box>

            <Box w='85%' margin={'auto'}>
                <Text mt={'50px'} mb={'40px'} textAlign={'center'} fontSize={'30px'} fontFamily={'Nunito,sans-serif'} fontWeight={'bold'} color={'rgb(1, 164, 121)'}>MY STATISTICS</Text>
                <Box display={{ base: "", sm: "", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} width={'100%'} justifyContent={'space-around'} margin={'auto'}>
                    <Box mt={{ base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0" }}>
                        <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=swatikharote"></Image>
                    </Box>

                    <Box mt={{ base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0" }}>
                        <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=swatikharote&layout=compact"></Image>
                    </Box>
                    <Box mt={{ base: "20px", sm: "20px", md: "0", lg: "0", xl: "0", "2xl": "0" }}>
                        <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=swatikharote&hide=contribs,prs"></Image>
                    </Box>


                </Box>
            </Box>
        </Box>
    )
}

export default Calendor