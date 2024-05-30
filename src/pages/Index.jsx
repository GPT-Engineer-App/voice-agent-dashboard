import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink, Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Home = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading>Welcome to the Property Management Dashboard</Heading>
      <Text>This dashboard allows you to manage and monitor your voice agents efficiently.</Text>
    </VStack>
  </Container>
);

const MaintenanceAgents = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading>Maintenance Agents</Heading>
      <Text>Manage your Maintenance Agents here.</Text>
    </VStack>
  </Container>
);

const OutboundAgents = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading>Outbound Agents</Heading>
      <Text>Manage your Outbound Agents here.</Text>
    </VStack>
  </Container>
);

const Settings = () => (
  <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <VStack spacing={4}>
      <Heading>Settings</Heading>
      <Text>Configure your dashboard settings here.</Text>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Router>
      <Box bg="gray.100" w="100%" p={4} color="black">
        <Flex justify="space-between" align="center">
          <Heading size="md">Property Management Dashboard</Heading>
          <Flex>
            <Link as={NavLink} to="/" p={2} mx={2}>Home</Link>
            <Link as={NavLink} to="/maintenance-agents" p={2} mx={2}>Maintenance Agents</Link>
            <Link as={NavLink} to="/outbound-agents" p={2} mx={2}>Outbound Agents</Link>
            <Link as={NavLink} to="/settings" p={2} mx={2}>Settings</Link>
          </Flex>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/maintenance-agents" element={<MaintenanceAgents />} />
        <Route path="/outbound-agents" element={<OutboundAgents />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default Index;