import React from "react";
import { Box, Flex, VStack, HStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Button, Avatar, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FaHome, FaEnvelopeOpenText, FaObjectGroup, FaUsers, FaAward, FaPlus, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const colorScheme = "blue";

  return (
    <Flex h="100vh" overflow="hidden">
      {/* Navigation Bar */}
      <VStack w="200px" p="5" bg={bg} alignItems="flex-start" spacing="24px" borderRight="1px" borderColor="gray.200">
        <Text fontSize="2xl" fontWeight="bold">
          Pied Piper Inc.
        </Text>
        <VStack alignItems="flex-start" spacing="4">
          <Button leftIcon={<FaHome />} justifyContent="flex-start" variant="ghost" colorScheme={colorScheme}>
            Home
          </Button>
          <Button leftIcon={<FaEnvelopeOpenText />} justifyContent="flex-start" variant="ghost" colorScheme={colorScheme}>
            Feedback
          </Button>
          <Button leftIcon={<FaObjectGroup />} justifyContent="flex-start" variant="ghost" colorScheme={colorScheme}>
            Objectives
          </Button>
          <Button leftIcon={<FaUsers />} justifyContent="flex-start" variant="ghost" colorScheme={colorScheme}>
            Team
          </Button>
          <Button leftIcon={<FaAward />} justifyContent="flex-start" variant="ghost" colorScheme={colorScheme}>
            Recognition
          </Button>
        </VStack>
      </VStack>

      {/* Main Content */}
      <Flex flexDirection="column" p="5" flexGrow="1" bg="gray.50">
        {/* Feedback Tabs */}
        <Tabs variant="enclosed" colorScheme={colorScheme}>
          <TabList mb="1em">
            <Tab>To me</Tab>
            <Tab>Given by me</Tab>
            <Tab>Requests</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{/* Content of 'To me' */}</TabPanel>
            <TabPanel>{/* Content of 'Given by me' */}</TabPanel>
            <TabPanel>{/* Content of 'Requests' */}</TabPanel>
          </TabPanels>
        </Tabs>

        {/* Ask for feedback button */}
        <Flex justifyContent="flex-end" mb="4">
          <Button rightIcon={<FaPaperPlane />} colorScheme={colorScheme}>
            Ask for feedback
          </Button>
        </Flex>

        {/* Suggested for you */}
        <VStack align="stretch" spacing="4">
          <Text fontSize="xl" fontWeight="bold">
            Suggested for you
          </Text>
          {Array.from({ length: 3 }).map((_, index) => (
            <HStack key={index} p="4" bg={bg} borderRadius="md" align="center">
              <Avatar src={`https://images.unsplash.com/photo-1616179054043-7570cd0d47d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0JTIwJTI0JTdCaW5kZXglN0R8ZW58MHx8fHwxNzA4OTg2ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080`} />
              <VStack align="start" spacing="0">
                <Text fontWeight="bold">Employee Name {index + 1}</Text>
                <Text fontSize="sm">Department {index + 1}</Text>
              </VStack>
              <Spacer />
              <Button rightIcon={<FaPlus />} colorScheme={colorScheme} variant="outline">
                Ask for feedback
              </Button>
            </HStack>
          ))}
        </VStack>

        {/* New post button */}
        <Flex justifyContent="center" mt="6">
          <Button leftIcon={<FaPlus />} colorScheme={colorScheme} size="lg">
            New post
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
