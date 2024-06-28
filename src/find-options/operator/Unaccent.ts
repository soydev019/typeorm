import { FindOperator } from "../FindOperator"

/**
 * Find Options Operator.
 * Example: { someField: Unaccent("Clémentine") }
 */
export function Unaccent(value: string | FindOperator<string>) {
    return new FindOperator("unaccent", value)
}
