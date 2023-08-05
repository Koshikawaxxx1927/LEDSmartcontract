#!/bin/bash

./prysmctl testnet generate-genesis --fork=bellatrix --num-validators=64 --output-ssz=genesis.ssz --chain-config-file=config.yml --override-eth1data=true --geth-genesis-json-in=genesis.json --geth-genesis-json-out=genesis.json

./beacon-chain \
  --datadir=beacondata \
  --jwt-secret=gethdata/geth/jwtsecret \
  --min-sync-peers=0 \
  --genesis-state=genesis.ssz \
  --bootstrap-node= \
  --chain-config-file=config.yml \
  --config-file=config.yml \
  --chain-id=32382 \
  --execution-endpoint=http://localhost:8551 \
  --accept-terms-of-use \
  --suggested-fee-recipient=0x123463a4b065722e99115d6c222f267d9cabb524