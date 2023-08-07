#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
source "$repository/scripts/common.sh"

function main() {
    required_command npm
    pushd "$repository"

    export PORT=${PORT:-"9000"}
    export NODE_ENV=${NODE_ENV:-"development"}

    npm run dev

    popd
}

main "$@"