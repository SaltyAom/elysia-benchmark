#!/bin/bash
bombardier --fasthttp -c 500 -d 10s http://localhost:3000/single
