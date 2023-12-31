#!/bin/bash

./validator \
  --beacon-rpc-provider=http://localhost:4000 \
  --datadir=validatordata \
  --accept-terms-of-use \
  --interop-num-validators=64 \
  --interop-start-index=0 \
  --force-clear-db \
  --chain-config-file=config.yml \
  --config-file=config.yml