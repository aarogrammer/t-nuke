<template>
    <div>
        <transition appear name="easeInOut" mode="out-in">
            <router-view id="main"></router-view>
        </transition>
    </div>
</template>
