#!/bin/bash

./geth --http --http.api "eth,engine" --datadir=gethdata --allow-insecure-unlock --unlock="0x123463a4b065722e99115d6c222f267d9cabb524" --password="" --nodiscover console --syncmode=full --mine --miner.etherbase=0x123463a4b065722e99115d6c222f267d9cabb524