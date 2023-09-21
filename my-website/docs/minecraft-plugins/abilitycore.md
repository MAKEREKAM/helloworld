---
sidebar_position: 1
---

# AbilityCore

개발자가 **직접** 능력을 추가할 수 있는 능력자 플러그인입니다.

- `Github` : https://github.com/MAKEREKAM/AbilityCore

# 코딩 가이드

프로젝트 파일을 복사합니다.

Enum `SkillList.kt`에 자신이 추가할 능력을 대문자로 작성합니다.

Main 클래스 (`Main.kt`)의 아래쪽에 `register()` 함수를 아래와 같이 작성합니다.

```kotlin title="Main.kt"
register(SkillList."방금 작성한 능력명", "능력 설명 창에 표시될 이름 (능력 이름), "능력 설명", 이벤트를 발동할 때 사용할 아이템 타입(Material), 밑에서 작성할 이벤트 클래스의 객체 (class()처럼 작성), 능력 쿨타임(틱 단위, 크리에이티브에서는 적용되지 않음))
```

`abilities` 패키지 안에 능력을 발동할 때 실행되는 이벤트 클래스를 만듭니다.

그 클래스는 인터페이스 `Ability.kt`를 구현해야 합니다.

```kotlin title="Vampire.kt"
class Vampire : Ability {

}
```

클래스 안에 `event` 메서드를 만듭니다.

```kotlin
override fun event(player : Player) {

}
```

이벤트를 발동할 때 사용하는 아이템을 들고 우클릭했을 때 `event` 함수가 `player` 매개변수를 해당 능력을 실행한 사람으로 실행됩니다.

크리에이티브 모드가 아니라면 능력 발동 시, 아이템이 하나 소모됩니다.

/ac, /abilitycore 명령어로 OP만 사용 가능한 능력 설정창을 열 수 있습니다.