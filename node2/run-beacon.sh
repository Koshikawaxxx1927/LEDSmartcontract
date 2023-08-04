#!/bin/bash

# genesis state
./prysmctl testnet generate-genesis --num-validators=64 --output-ssz=genesis.ssz --chain-config-file=config.yml --override-eth1data=true

./beacon-chain \
  --datadir=beacondata \
  --min-sync-peers=0 \
  --genesis-state=genesis.ssz \
  --bootstrap-node= \
  --chain-config-file=config.yml \
  --config-file=config.yml \
  --chain-id=32382 \
  --execution-endpoint=http://localhost:8551 \
  --accept-terms-of-use \
  --jwt-secret=gethdata/geth/jwtsecret \
  --contract-deployment-block=0 \
  --log-file=beacondata/beacon-chain.log