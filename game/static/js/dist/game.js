class GameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="game_menu">
    <div class="game_menu_field">
        <div class="game_menu_field_item game_menu_field_item_single_mod">
            单人模式
        </div>
        <br><br>
        <div class="game_menu_field_item game_menu_field_item_multi_mod">
            多人模式
        </div>
        <br><br>
        <div class="game_menu_field_item game_menu_field_item_settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$game.append(this.$menu);
        this.$single_mod = this.$menu.find('.game_menu_field_item_single_mod');
        this.$multi_mod = this.$menu.find('.game_menu_field_item_multi_mod');
        this.$settings = this.$menu.find('.game_menu_field_item_settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mod.click(function() {
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mod.click(function() {
            console.log("click multi mode");
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}
class GamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>游戏界面</div>`);

        this.hide();
        this.root.$game.append(this.$playground);

        this.start();
    }

    start(){
    }

    show() {
        this.$playground.show();
    }

    hide() {
        this.$playground.hide();
    }
}
class Game {
    constructor(id) {
        this.id = id;
        this.$game = $('#' + id);
        this.menu = new GameMenu(this);
        this.playground = new GamePlayground(this);

        this.start();
    }

    start(){
    }
}