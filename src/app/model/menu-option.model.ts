export interface MenuOption {
    name: string;
    path: string;
    active?: boolean;
    suboptions?: MenuOption[];
}
