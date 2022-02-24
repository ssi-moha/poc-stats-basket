export interface PlayerGateway {
    addTwoPoints(index: number): void;
    addThreePoints(index: number): void;
    addPass(index: number): void;
    addFoul(index: number): void;
    addOffensiveRebound(index: number): void;
    addDefensiveRebound(index: number): void;
}