<template>
    <div class="container-fluid contact">
        <div class="container">
            <h5>
                <span><a href="#">Contact Us</a></span>|
                <span>510-655-3030</span>
            </h5>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderTop'
}
</script>
<style>
.contact {
    display: flex;
    justify-content: flex-end;
    border-bottom: solid 1px #ccc;
    background: #f5f5f5;
}
.contact h5 {
    font-size: 14px;
    justify-content: flex-end;
    padding: 5px;
    letter-spacing: 1px;
}
.contact h5 span {
    padding-left: 10px;
    padding-right: 10px;
}
</style>