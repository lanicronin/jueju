//go:generate go run github.com/oapi-codegen/oapi-codegen/v2/cmd/oapi-codegen --config=cfg.yaml ../../docs/openapi.yaml

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

package api

import "github.com/gofiber/fiber/v2"

// ensure that we've conformed to the `ServerInterface` with a compile-time check
var _ ServerInterface = (*Server)(nil)

type Server struct{}

// GetUser implements ServerInterface.
func (s Server) GetUser(c *fiber.Ctx) error {
	// TODO: implement GetUser
	// for now we'll just return a mock response
	return c.JSON(map[string]string{
		"message": "Hello, World!",
	})
}

// Login implements ServerInterface.
func (s Server) Login(c *fiber.Ctx) error {
	panic("unimplemented")
}

func NewServer() Server {
	return Server{}
}
