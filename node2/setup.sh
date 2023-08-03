#!/bin/bash

# prysm install & build
git clone https://github.com/Koshikawaxxx1927/LEDSmartcontract
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/beacon-chain-v4.0.7-linux-arm64
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/validator-v4.0.7-linux-arm64
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/prysmctl-v4.0.7-linux-arm64

cp ./prysm/cmd/beacon-chain-v4.0.7-linux-arm64 ./beacon-chain
cp ./prysm/cmd/validator-v4.0.7-linux-arm64 ./validator
cp ./prysm/cmd/prysmctl-v4.0.7-linux-arm64 ./prysmctl


# geth install & build
git clone https://github.com/ethereum/go-ethereum && cd go-ethereum
make geth
cp ./build/bin/geth ../geth
cd ..

./geth --datadir=gethdata init genesis.json
./geth --datadir=gethdata account import secret.json
