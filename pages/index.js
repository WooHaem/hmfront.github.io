import {Box, Container} from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack developer based in Korea!
      </Box>
      
      <Box display={{md: 'flex'}}>
      
      </Box>
    </Container>
  )
}

export default Page