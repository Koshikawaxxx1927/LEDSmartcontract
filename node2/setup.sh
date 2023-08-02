#!/bin/bash

# prysm install & build
git clone https://github.com/prysmaticlabs/prysm && cd prysm
go build -o=../beacon-chain ./cmd/beacon-chain
go build -o=../validator ./cmd/validator
go build -o=../prysmctl ./cmd/prysmctl
cd ..

# geth install & build
git clone https://github.com/ethereum/go-ethereum && cd go-ethereum
make geth
cp ./build/bin/geth ../geth
cd ..

./geth --datadir=gethdata init genesis.json
./geth --datadir=gethdata account import secret.json

