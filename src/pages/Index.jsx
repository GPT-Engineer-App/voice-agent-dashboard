import { Box, Container, Flex, Heading, Link, Text, VStack, Menu, MenuButton, MenuList, MenuItem, Button, Spacer } from "@chakra-ui/react";
import { NavLink, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Select Agent
            </MenuButton>
            <MenuList>
              <MenuItem as={NavLink} to="/maintenance-agents">Maintenance Agent</MenuItem>
              <MenuItem as={NavLink} to="/outbound-agents">Outbound Agent</MenuItem>
            </MenuList>
          </Menu>
          <Flex justify="center" flex="1">
            <Link as={NavLink} to="/agent" p={2} mx={2}>Agent</Link>
            <Link as={NavLink} to="/call-logs" p={2} mx={2}>Call Logs</Link>
            <Link as={NavLink} to="/integrations" p={2} mx={2}>Integrations</Link>
          </Flex>
          <Spacer />
          <Link as={NavLink} to="/settings" p={2} mx={2}>Account Settings</Link>
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