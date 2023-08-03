#!/bin/bash

# prysm install & build
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/beacon-chain-v4.0.7-linux-arm64
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/validator-v4.0.7-linux-arm64
wget -P ./prysm/cmd https://github.com/prysmaticlabs/prysm/releases/download/v4.0.7/prysmctl-v4.0.7-linux-arm64

ln -s ./prysm/cmd/beacon-chain-v4.0.7-linux-arm64 ./beacon-chain
ln -s ./prysm/cmd/validator-v4.0.7-linux-arm64 ./validator
ln -s ./prysm/cmd/prysmctl-v4.0.7-linux-arm64 ./prysmctl

chmod 777 ./beacon-chain
chmod 777 ./validator
chmod 777 ./prysmctl

# geth install & build
git clone https://github.com/ethereum/go-ethereum && cd go-ethereum
# geth v12-stable version
git checkout e501b3b05db8e169f67dc78b7b59bc352b3c638d
make geth
cp ./build/bin/geth ../geth
cd ..

./geth --datadir=gethdata init genesis.json
./geth --datadir=gethdata account import secret.json
