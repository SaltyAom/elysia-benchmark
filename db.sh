#!/bin/bash
docker run -p 5432:5432 -e POSTGRES_PASSWORD=12345678 -d postgres
