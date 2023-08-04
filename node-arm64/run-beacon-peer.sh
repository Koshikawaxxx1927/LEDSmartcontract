#!/bin/bash

# genesis state
./prysmctl testnet generate-genesis --num-validators=64 --output-ssz=genesis.ssz --chain-config-file=config.yml --override-eth1data=true

./beacon-chain \
  --datadir=beacondata2 \
  --min-sync-peers=1 \
  --genesis-state=genesis.ssz \
  --bootstrap-node= \
  --chain-config-file=config.yml \
  --config-file=config.yml \
  --chain-id=32382 \
  --execution-endpoint=http://localhost:8551 \
  --accept-terms-of-use \
  --rpc-port=4001 \
  --p2p-tcp-port=13001 \
  --p2p-udp-port=12001 \
  --grpc-gateway-port=3501 \
  --monitoring-port=8001 \
  --jwt-secret=gethdata/geth/jwtsecret \
  --peer=$PEER