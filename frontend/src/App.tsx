// Copyright 2024 Robert Cronin
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Link, useLocation } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Tabs, Tab } from "@mui/material";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <NavBar />
      <Tabs value={currentPath}>
        <Tab label="Home" value="/" component={Link} to="/" />
        <Tab
          label="My JueJu"
          value="/my-jueju"
          component={Link}
          to="/my-jueju"
        />
        <Tab label="Feed" value="/feed" component={Link} to="/feed" />
      </Tabs>
    </>
  );
};

export default App;
